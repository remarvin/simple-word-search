/*
 * simple-word-search v1.0.0
 *
 * A simple JavaScript word search puzzle with no dependencies.
 * By Ripley Marvin
 * At https://github.com/remarvin/simple-word-search
 *
 */

class SimpleWordSearch {
  constructor(height, width, words) {
	// Throw error if height is not valid
	if (!height || !Number.isInteger(height)) {
	  throw new Error("simple-word-search error: height is not a valid integer");
	} else {
	  this.height = height;
	}
	
	// Throw error if width is not valid
	if (!width || !Number.isInteger(width)) {
	  throw new Error("simple-word-search error: width is not a valid integer");
	} else {
	  this.width = width;
	}
	
	// Throw error if no words given
	if (!words || words.length == 0) {
	  throw new Error("simple-word-search error: missing or invalid words");
	} else {
	  this.words = words;
	}
	
	// Default values
	this.puzzle = [];
	this.puzzleKey = [];
	this.puzzleCreated = false;
	
	// Create puzzle
	this.createPuzzle();
  }
  
  createPuzzle() {
	
  }
}