from enum import IntEnum, StrEnum


MAX_MOVES_IN_CHESS = 5949 # Theoretical limit to number of games in chess
MAX_MOVES_WO_CAPTURE = 75 # Maximum number of moves without capturing a piece before match is determined a draw
MAX_REPEATED_POSITION = 3 # If the board is the same 3 times in a row, claim an immediate draw
DEFAULT_BOARD = "RNBQKBNRPPPPPPPP00000000000000000000000000000000pppppppprnbkqbnr"
## ENUM classes for Game status' and Outcomes
PIECES = {
    "P" : "White Pawn",
    "N" : "White Knight",
    "B" : "White Bishop",
    "Q" : "White Queen",
    "K" : "White King",
    "p" : "Black Pawn",
    "n" : "Black Knight",
    "b" : "Black Bishop",
    "q" : "Black Queen",
    "k" : "Black King"
}
class GameStatus(IntEnum):
    WAITING_FOR_OPPONENT = 1
    ACTIVE = 2
    PAUSED = 3
    COMPLETE = 4

    @classmethod
    def choices(cls):
        return [(key.value,key.name) for key in cls]
    
class GameOutcomes(IntEnum):
    WHITE_WON = 1
    BLACK_WON = 2
    DRAW = 3
    WHITE_FORFEIT = 4
    BLACK_FORFEIT = 5

    @classmethod
    def choices(cls):
        return [(key.value,key.name) for key in cls]