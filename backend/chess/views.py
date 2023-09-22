from django.shortcuts import render
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.authentication import SessionAuthentication
from chess.models import *
from api.models import AuthUser
from .serials import *
from chess import GameStatus
from api import ProtectedAPIView
import chess

class GameRequestResponseAPI(ProtectedAPIView):
    """
    Accept or decline a game request. 
    @arg kwargs["response"] is the response value
    """
    def post(self,request,**kwargs):
        if "id" not in request.data:
            return Response("No Game Id provided",status.HTTP_400_BAD_REQUEST)
        try:
            game = ChessGame.objects.get(pk=request.data["id"])
        except:
            return Response("Invalid Game ID provided",status.HTTP_400_BAD_REQUEST)
        try:
            player = Player.objects.get(userid=request.user)
        except:
            return Response("You don't have a player created!",status.HTTP_400_BAD_REQUEST)
        if kwargs["response"] == 1:
            if not game.acceptGame(player):
                return Response("This is not your game to accept...",status.HTTP_401_UNAUTHORIZED)
        elif kwargs["response"] == 0:
            if not game.declineGame(player):
                return Response("This is not your game to decline...",status.HTTP_401_UNAUTHORIZED)
        else:
            return Response("Invalid response to request. 1 : Accept, 0 : Decline",status.HTTP_400_BAD_REQUEST)
        return True

class RequestGameAPI(ProtectedAPIView):
    """
    Requests a new Game
    """
    authentication_classes = [SessionAuthentication]
    def delete(self,request):
        return Response("",status.HTTP_200_OK)
    def post(self,request):
        # Side selection
        if "side" not in request.data:
            return Response("No side selected, please choose white (0) or black (1)",status.HTTP_400_BAD_REQUEST)
        data = {
            "requester": request.user
        }
        if "defaultSides" in request.data:
            if isinstance(request.data["defaultSides"],bool):
                data["defaultSides"] = request.data["defaultSides"]
            else:
                return Response("Invalid side selected",status.HTTP_400_BAD_REQUEST)
        
        # Opponent selection
        if "opponent" not in request.data:
            # Select Random player
            data["status"] = GameStatus.WAITING_FOR_OPPONENT
        else: 
            # Request a game with a friend
            data["status"] = GameStatus.PENDING_MATCH_ACCEPTED
            # Validate user
            try:
                opponent = Player.objects.get(pk=request.data["opponent"])
            except:
                return Response("Invalid user",status.HTTP_400_BAD_REQUEST)
            data["opponent"] = opponent
        # Create Game
        gameSerial = NewChessGameSerializer(data=data)
        if gameSerial.is_valid():
            game = gameSerial.save()
        else:
            return Response("Failed to create a new game",status.HTTP_400_BAD_REQUEST)
        return Response(game.pk,status.HTTP_201_CREATED) 
    
@api_view(['GET'])
def validateMoveAPI(request):
    """
    Validates a move
    """
    return Response(True)