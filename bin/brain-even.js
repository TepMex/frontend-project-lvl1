#!/usr/bin/env node
import { runGame } from '../src/engine.js';
import { Games } from '../src/game-types.js';

runGame(Games.EVEN_OR_ODD);
