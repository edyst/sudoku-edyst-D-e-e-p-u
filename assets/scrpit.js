


function Easy() {

  
    for (let i = 1; i < 82; i++) {
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("disabled");
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("repeat");
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("inputcolor");
    }
  
  
    document.getElementById("solveSudoku").style.display = "none";
    document.getElementById("sudoku-grid").classList.remove("backColor");
  
    let board = [
      ["5", "2", "0", "8", "3", "1", "0", "6", "4"],
      ["8", "0", "4", "0", "0", "0", "0", "5", "3"],
      ["1", "0", "3", "0", "4", "0", "0", "0", "0"],
      ["6", "5", "0", "0", "0", "8", "0", "0", "0"],
      ["0", "4", "9", "7", "0", "3", "5", "1", "0"],
      ["0", "0", "8", "4", "1", "5", "2", "9", "0"],
      ["0", "0", "0", "1", "0", "7", "6", "0", "0"],
      ["4", "0", "0", "0", "0", "6", "8", "0", "0"],
      ["9", "1", "0", "0", "0", "0", "0", "7", "0"],
    ];
    // let board = [
    //     ["5", "3", "0", "0", "7", "0", "0", "0", "0"],
    //    ["6", "0", "0", "1", "9", "5", "0", "0", "0"],
    //    ["0", "9", "8", "0", "0", "0", "0", "6", "0"],
    //    ["8", "0", "0", "0", "6", "0", "0", "0", "3"],
    //    ["4", "0", "0", "8", "0", "3", "0", "0", "1"],
    //    ["7", "0", "0", "0", "2", "0", "0", "0", "6"],
    //    ["0", "6", "0", "0", "0", "7", "6", "0", "0"],
    //    ["4", "0", "0", "0", "0", "0", "2", "8", "0"],
    //    ["0", "0", "0", "0", "8", "0", "0", "7", "9"],
    //   ];
  
    let j = 1;
  
    board.forEach((element, index) => {
      element.forEach((ele, idx) => {
        if (ele != 0) {
          document.querySelector(`#cell-${j} input`).value = ele;
          document
            .querySelector(`#cell-${j} input`)
            .classList.add("disabled");
  
          j++;
        } else {
          document.querySelector(`#cell-${j} input`).value = "";
          j++;
        }
      });
    });
  }
  
  
  function Medium() {
  
    for (let i = 1; i < 82; i++) {
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("disabled");
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("repeat");
        document
        .querySelector(`#cell-${i} input`)
        .classList.remove("inputcolor");
    }
  
    document.getElementById("solveSudoku").style.display = "none";
    document.getElementById("sudoku-grid").classList.remove("backColor");
  
    let board = [
      ["0", "0", "0", "0", "1", "0", "5", "0", "0"],
      ["0", "0", "9", "0", "0", "7", "0", "0", "0"],
      ["5", "3", "0", "0", "0", "0", "0", "0", "2"],
      ["0", "0", "6", "0", "3", "0", "0", "0", "7"],
      ["0", "0", "8", "7", "4", "0", "3", "0", "0"],
      ["0", "5", "3", "0", "0", "6", "0", "8", "0"],
      ["0", "6", "2", "3", "0", "0", "0", "0", "0"],
      ["3", "0", "0", "0", "6", "1", "8", "0", "0"],
      ["0", "8", "0", "4", "0", "9", "7", "6", "0"],
    ];
  
    let j = 1;
    board.forEach((element, index) => {
      element.forEach((ele, idx) => {
        if (ele != 0) {
          document.querySelector(`#cell-${j} input`).value = ele;
          document
            .querySelector(`#cell-${j} input`)
            .classList.add("disabled");
          j++;
        } else {
          document.querySelector(`#cell-${j} input`).value = "";
          j++;
        }
      });
    });
  }
  
  
  function Hard() {
  
    for (let i = 1; i < 82; i++) {
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("disabled");
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("repeat");
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("inputcolor");
    }
  
  
    document.getElementById("solveSudoku").style.display = "none";
    document.getElementById("sudoku-grid").classList.remove("backColor");
  
    let board = [
      ["0", "0", "6", "0", "0", "0", "0", "0", "1"],
      ["0", "3", "0", "0", "0", "0", "8", "0", "0"],
      ["0", "0", "0", "5", "0", "8", "4", "0", "0"],
      ["0", "6", "0", "0", "1", "0", "0", "2", "0"],
      ["0", "0", "3", "0", "0", "7", "0", "0", "0"],
      ["0", "9", "1", "0", "0", "0", "3", "0", "0"],
      ["0", "0", "0", "0", "0", "5", "1", "7", "0"],
      ["1", "5", "0", "0", "2", "6", "0", "0", "0"],
      ["0", "0", "0", "0", "9", "0", "6", "5", "0"],
    ];
  
    let j = 1;
    board.forEach((element, index) => {
      element.forEach((ele, idx) => {
        if (ele != 0) {
          document.querySelector(`#cell-${j} input`).value = ele;
          document
            .querySelector(`#cell-${j} input`)
            .classList.add("disabled");
          j++;
        } else {
          document.querySelector(`#cell-${j} input`).value = "";
          j++;
        }
      });
    });
  }
  
  
  function rowValidation(rowNum) {
    let checkDuplicate = [];
    let duplicateIndex = [];
    let start = 9 * rowNum - 8;
    let end = 9 * rowNum;
    let sum = 0;
    let val;
    for (; start <= end; start++) {
      val = Number(document.querySelector(`#cell-${start} input`).value);
      checkDuplicate.push(val);
      duplicateIndex.push(start);
      sum = sum + val;
    }
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9 && j != i; j++) {
        if (
          checkDuplicate[i] == checkDuplicate[j] &&
          checkDuplicate[i] != ""
        ) {
          document
            .querySelector(`#cell-${duplicateIndex[i]} input`)
            .classList.add("repeat");
          document
            .querySelector(`#cell-${duplicateIndex[j]} input`)
            .classList.add("repeat");
        }
      }
    }
  
    return sum;
  }
  
  function columnValidation(colNum) {
    let checkDuplicate = [];
    let duplicateIndex = [];
    let start = colNum;
    let end = 7 * 10 + colNum + 2;
    let sum = 0;
    let val;
    for (; start <= end; start += 9) {
      val = Number(document.querySelector(`#cell-${start} input`).value);
      checkDuplicate.push(val);
      duplicateIndex.push(start);
      sum = sum + val;
    }
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9 && j != i; j++) {
        if (
          checkDuplicate[i] == checkDuplicate[j] &&
          checkDuplicate[i] != ""
        ) {
          document
            .querySelector(`#cell-${duplicateIndex[i]} input`)
            .classList.add("repeat");
          document
            .querySelector(`#cell-${duplicateIndex[j]} input`)
            .classList.add("repeat");
        }
      }
    }
  
    return sum;
  }
  
  function rowsValidation() {
    let check = 0;
  
    for (let i = 1; i < 10; i++) {
      if (rowValidation(i) == 45) check++;
    }
    if (check == 9) return 1;
    else return 0;
  }
  
  
  
  
  function columnsValidation() {
    let check = 0;
  
    for (let i = 1; i < 10; i++) {
      if (columnValidation(i) == 45) check++;
    }
    if (check == 9) return 1;
    else return 0;
  }
  
  
  function boxValidation(boxNum) {
    let sum = 0;
    let checkDuplicate = [];
    let duplicateIndex = [];
  
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        val = Number(document.querySelector(`#cell-${boxNum} input`).value);
        sum = sum + val;
        checkDuplicate.push(val);
        duplicateIndex.push(boxNum);
        boxNum++;
      }
      boxNum += 6;
    }
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9 && j != i; j++) {
        if (
          checkDuplicate[i] == checkDuplicate[j] &&
          checkDuplicate[i] != ""
        ) {
          document
            .querySelector(`#cell-${duplicateIndex[i]} input`)
            .classList.add("repeat");
          document
            .querySelector(`#cell-${duplicateIndex[j]} input`)
            .classList.add("repeat");
        }
      }
    }
  
    return sum;
  }
  
  function validate() {
    for (let i = 1; i < 82; i++) {
      document
        .querySelector(`#cell-${i} input`)
        .classList.remove("repeat");
    }
  
    var rowResult = rowsValidation();
    var colResult = columnsValidation();
    var boxResult = boxesValidation();
    if (rowResult && colResult && boxResult) {
      document.getElementById("solveSudoku").innerText =
        "Congratulations and Celebrations!!";
  
  
      document.getElementById("solveSudoku").classList.add("solveSudoku");
      document.getElementById("sudoku-grid").classList.add("backColor");
      document.getElementById("solveSudoku").style.display = "block";
    } else {
  
  
    }
  }
  
  function boxesValidation() {
      let check = 0;
    let boxNumber = 1;
  
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        if (boxValidation(boxNumber) == 45) check++;
        boxNumber += 3;
      }
      boxNumber += 18;
    }
  
    if (check == 9) return 1;
    else return 0;
  }
  
  
  function onFocus(rowNumber,colNumber,boxNumber) {
    document.getElementById("solveSudoku").style.display = "none";
    document.getElementById("sudoku-grid").classList.remove("backColor");
    
    for (let j = 1; j < 82; j++) {
      document.querySelector(`#cell-${j} input`).classList.remove("inputcolor");
      document.querySelector(`#cell-${j} input`)
            .classList.remove("repeat");
    }
  
  
    for (let j = 9*rowNumber-8; j<=9*rowNumber; j++) {
      document.querySelector(`#cell-${j} input`).classList.add("inputcolor");
    }
  
  
  for (let j =colNumber; j<=colNumber+72; j+=9) {
      document.querySelector(`#cell-${j} input`).classList.add("inputcolor");
    }
  
  
        inputcolorBox(boxNumber);
  
  }
  
  
  function inputcolorBox(boxNumber){
  
      
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        document.querySelector(`#cell-${boxNumber} input`).classList.add("inputcolor");
        boxNumber ++;
      }
      boxNumber += 6;
    }
  
  
  }
  
//   NOT WORKING
  var checkButton = document.getElementById('checkButton');
  
  checkButton.addEventListener('click', function() {
    
    clearErrors();
    
    var board = getCurrentBoard();
    var result = verifySolution(board);
    if(result['valid']) {
    
      var validMessages = [ "LOOKIN GOOD", "KEEP GOING", "AWESOME", "EXCELLENT", 
        "NICE", "SWEET", "LOOKS GOOD TO ME"];
      
      if(verifySolution(board, true)['valid']) {
        winBlock.style.display = 'block';
      }
      else {
        var randIndex = getRandom(validMessages.length);
        noErrorsSpan.textContent = validMessages[randIndex];
        noErrorsSpan.style.display = 'block';
      }
    }
    else {
      if('badRow' in result) {
        var row = result['badRow'];
        for(var i = 0; i < 9; i++) {
          var id = "" + row + i;
          var el = document.getElementById(id);
          el.setAttribute("class", el.getAttribute('class') + " error");
          currentErrors.push(el);
        }
      }
      else if('badCol' in result) {
        var col = result['badCol'];
        for(var i = 0; i < 9; i++) {
          var id = "" + i + col;
          var el = document.getElementById(id);
          el.setAttribute("class", el.getAttribute('class') + " error");
          currentErrors.push(el);
        }
      }
      else if('badCube' in result) {
        var cubeRow = result['badCube'][0];
        var cubeCol = result['badCube'][1];
        for(var x = cubeRow + 2; x >= cubeRow; x--) {
          for(var y = cubeCol + 2; y >= cubeCol; y--) {
            var id = "" + x + y;
            var el = document.getElementById(id);
            el.setAttribute("class", el.getAttribute('class') + " error");
            currentErrors.push(el);
          }
        }
        
      }
      errorsFoundSpan.style.display = 'block';
    }
    
    
  }, false);