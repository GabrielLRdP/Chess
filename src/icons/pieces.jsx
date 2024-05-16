import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessPawn,
  faChessKing,
  faChessQueen,
  faChessBishop,
  faChessKnight,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";

const blackPawn = (
  <FontAwesomeIcon icon={faChessPawn} className="black-piece" />
);
const whitePawn = (
  <FontAwesomeIcon icon={faChessPawn} className="white-piece" />
);

const whiteKing = (
  <FontAwesomeIcon icon={faChessKing} className="white-piece" />
);

const blackKing = (
  <FontAwesomeIcon icon={faChessKing} className="black-piece" />
);

const whiteQueen = (
  <FontAwesomeIcon icon={faChessQueen} className="white-piece" />
);

const blackQueen = (
  <FontAwesomeIcon icon={faChessQueen} className="black-piece" />
);

const whiteBishop = (
  <FontAwesomeIcon icon={faChessBishop} className="white-piece" />
);

const blackBishop = (
  <FontAwesomeIcon icon={faChessBishop} className="black-piece" />
);

const whiteKnight = (
  <FontAwesomeIcon icon={faChessKnight} className="white-piece" />
);

const blackKnight = (
  <FontAwesomeIcon icon={faChessKnight} className="black-piece" />
);

const whiteRook = (
  <FontAwesomeIcon icon={faChessRook} className="white-piece" />
);

const blackRook = (
  <FontAwesomeIcon icon={faChessRook} className="black-piece" />
);

export {
  blackPawn,
  whitePawn,
  whiteKing,
  blackKing,
  whiteQueen,
  blackQueen,
  whiteBishop,
  blackBishop,
  whiteKnight,
  blackKnight,
  whiteRook,
  blackRook,
};
