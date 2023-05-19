const GameManager = {
    CURRENT_TILE_TYPES:4,
    CURRENT_SCORE: 0,
    MAXIMUM_SCORE: 10,
    MOVES_TAKEN: 0,
    LEVEL: 1,
    TIMER: 100,
    COL: 5,
    ROW: 5,
    TILE_SIZE: 100
};

const icons = ["fox", "chinchilla", "duck", "bull", "red_panda", "panda", "sloth", "pig", "chicken"];
const grid = document.querySelector("#grid");
const grid_allocation = new Array(GameManager.ROW).fill(0).map(() => new Array(GameManager.COL).fill(0));

function onMouseDown() {
  this.style.backgroundColor = "orange";
}

function onMouseUp() {
    this.style.backgroundColor = "red";
}

function onHoverEnter() {
    this.style.backgroundColor = "purple";
}

function onHoverOut() {
    this.style.backgroundColor = "red";
}

function createGrid() {
    grid.style.height = (GameManager.ROW * GameManager.TILE_SIZE) + "px";
    grid.style.width = (GameManager.COL * GameManager.TILE_SIZE) + "px";
    
    for (let a = 0; a < GameManager.ROW; a++) {
        for (let b = 0; b < GameManager.COL; b++) {
            const temp = grid.appendChild(document.createElement("div"));
            temp.setAttribute("id", "r" + a + "-c" + b);
            temp.setAttribute("class", "tiles");
            temp.style.height = GameManager.TILE_SIZE + "px";
            temp.style.width = GameManager.TILE_SIZE + "px";
            temp.style.borderRadius = "100px";
            temp.addEventListener("mousedown", onMouseDown);
            temp.addEventListener("mouseup", onMouseUp);
            temp.addEventListener("mouseenter", onHoverEnter);
            temp.addEventListener("mouseout", onHoverOut);
        }
    }
}

function fillGrid() {
    for (let a = 0; a < GameManager.ROW; a++) {
        for (let b = 0; b < GameManager.COL; b++) {
            const temp = random(GameManager.CURRENT_TILE_TYPES)
            grid_allocation[a][b] = temp;
            document.querySelector("#r" + a + "-c" + b).style.backgroundImage = "url('images/" + icons[temp] + ".png')";
            document.querySelector("#r" + a + "-c" + b).style.backgroundRepeat = "no-repeat";
            document.querySelector("#r" + a + "-c" + b).style.backgroundPosition = "center";
            document.querySelector("#r" + a + "-c" + b).style.backgroundSize = "70%";
        }
    }
    console.log(grid_allocation);
}

function random(max) {
    return Math.floor(Math.random() * max);
  }

function Start() {
    createGrid();
    fillGrid();
}

Start();

// PSEUDO CODE
// 1. MOVE TILES LEFT AND RIGHT TO CHECK FOR POSSIBLE PATTERN
// 2. CHECK FOR PATTERNS ACROSS THE BOARD
// 3. RESET PATTERN TO PREVIOUS BOARD
// 4. SPAWN TILES FROM THE TOP AND DROPS THEM DOWN INTO ARRAY

// 5. LOSE CONDITION: TIMER RUNS OUT OF TIME - NO MORE PATTERNS - PLAYER TERMINATES GAME
// 6. WIN CONDITION: MAXIMUM SCORE REACHED
// 7. POINTS: 1 POINT EACH