#!/usr/bin/env node
import { startingScreen } from '../src/cli.js';
import { gameLoop } from '../src/brain-even.js';

const userName = startingScreen();
gameLoop(userName);
