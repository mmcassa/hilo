from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator,MinValueValidator, RegexValidator
from api import models as usermodels
import re, datetime
import chess


# If Player is a computer player, then userid is None
class Player(models.Model):
    name = models.CharField(max_length=150,blank=True,null=True)
    userid = models.ForeignKey(usermodels.AuthUser,models.DO_NOTHING,blank=True,null=True)
    rank = models.IntegerField(validators=[MaxValueValidator(3000),MinValueValidator(400)],default=1200)
    createDate = models.DateField(default=timezone.now())
    archive = models.BooleanField(default=False)

class Friend(models.Model):
    player1 = models.ForeignKey(Player,models.DO_NOTHING,related_name="fk_player_friend1")
    player2 = models.ForeignKey(Player,models.DO_NOTHING,related_name="fk_player_friend2")
    createDate = models.DateField(default=timezone.now())

class FriendRequests(models.Model):
    requester = models.ForeignKey(Player,models.DO_NOTHING,related_name="fk_player_friend_requester")
    requestee = models.ForeignKey(Player,models.DO_NOTHING,related_name="fk_player_friend_requestee")
    archive = models.BooleanField(default=False)

class ChessGame(models.Model):
    """
    Chess Game model stores active or complete games
    Board values are as follow (uppercase implies white piece, lowercase implies black piece) => {
        0 : Empty,
        K/k : King,
        Q/q: Queen,
        B/b: Bishop,
        N/n: Knight,
        R/r: Rook,
        P/p: Pawn            
    }
    """
    requester = models.ForeignKey(Player,models.DO_NOTHING,related_name="fk_game_player_owner_1",blank=True,null=True)
    opponent = models.ForeignKey(Player,models.DO_NOTHING,related_name="fk_game_player_opponent_1",blank=True,null=True)
    defaultSides = models.BooleanField(default=True) # if defaultSides is True then requester is white
    board = models.CharField(max_length=64,validators=[RegexValidator(r"[kqpbr0]{64}",flags=re.IGNORECASE)],default=chess.DEFAULT_BOARD)
    moveCount = models.IntegerField(validators=[MaxValueValidator(chess.MAX_MOVES_IN_CHESS)],default=0)
    moves = models.TextField(max_length=5*chess.MAX_MOVES_IN_CHESS,default="")
    status = models.SmallIntegerField(choices=chess.GameStatus.choices())
    outcome = models.SmallIntegerField(choices=chess.GameOutcomes.choices(),blank=None,null=None)
    
    def get_board(self):
        arr = [
            *self.board[0:7],
            *self.board[8:15],
            *self.board[16:23],
            *self.board[24:31],
            *self.board[32:39],
            *self.board[40:47],
            *self.board[48:55],
            *self.board[56:63]
        ]
        return arr

    def get_moves(self,start_offset=0,end_offset=0):
        moves = []
        if start_offset > self.moveCount or end_offset >= self.moveCount:
            return None
        for i in range(start_offset*5,self.moveCount if end_offset == 0 else end_offset*5,5):
            moves.append((chess.PIECES[self.moves[i],self.moves[i+1:i+2],self.moves[i+3,i+4]]))
        return moves
    
    def declineGame(self,user):
        if self.opponent != user:
            return False
        self.status = chess.GameStatus.MATCH_DECLINED
        return True
    def acceptGame(self,user: Player):
        """
        Accepts a user and confirms a match if the user matches the opponent or if there was an open request
        """
        if self.opponent is None:
            self.opponent = user
        elif self.opponent != user:
            return False

        self.status = chess.GameStatus.ACTIVE
        return True
