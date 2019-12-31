package model

import model.JokeValue

data class RandomJokeResponse(val type: String,
                              val value: JokeValue
)