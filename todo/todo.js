const prompt = require("prompt-sync")();

const todo = [];
    // 1단계 기본적인 할 일 추가 기능
    function addTodo(){
            while(true){
                const input = prompt("할 일을 입력하세요(종료는 'exit' 입력): ");
                if(input === 'exit'){
                    console.log("입력을 종료합니다.");break;     
                } 
                todo.push({ text: input, done: false });
            }
    }
    //2단계 할 일 목록 출력 기능
    function showTodo(){
        for(let i = 0; i < todo.length; i++){
            console.log((i +  1) + ". " + todo[i]);
        }
    }
    //3단계 할 일 삭제 기능
    function removeTodo(){
        while(true){
            const remove = prompt("삭제할 번호를 입력하세요(종료는 'exit' 입력): ");
            const removeNum = parseInt(remove);
            if(remove === 'exit'){
                console.log("삭제를 종료합니다.");
                break;
            }else if(removeNum <= todo.length && removeNum > 0) {
                todo.splice(removeNum -1, 1);
                console.log(removeNum + "번이 삭제되었습니다.");     
            }else if(todo.length === 0){
                console.log("삭제할 할 일이 없습니다.");
                break;
            }else  
                console.log("해당 할 일이 없습니다. 1 부터" + todo.length + " 까지 중에서 다시 입력하세요.");
        }
    }
    //4단계 할 일 완료 체크 기능
    function checkTodo(){
        while(true){
            const check = prompt("완료한 할 일의 번호를 입력하세요(종료는 'exit' 입력): ");
            const checkNum = parseInt(check);
            if(check === 'exit'){
                console.log("완료된 번호 입력을 종료합니다.");
                break;
            }else if(checkNum <= todo.length && checkNum > 0){
                todo[checkNum-1].done = true;
                console.log(checkNum + "번이 완료되었습니다.");
            }else console.log("잘못된 번호입니다.");
        }
    }

    //5단계 데이터 구조 개선
    function arrTodo(){
        todo.forEach((todo, i) => {
            const status = todo.done? "[✔]": "[ ]";
            console.log(`${i+1}. ${status} ${todo.text}`)
        });
    }
    
//6단계 기능 통합 및 반복 메뉴 구현
    while(true){
        const menu = prompt("원하는 메뉴를 숫자만 입력하세요(1. 할 일 추가, 2. 목록 보기, 3. 완료 체크, 4. 삭제, 5. 종료): ");
        switch(menu){
            case "1":
                addTodo(); break;
            case "2":
                arrTodo(); break;
            case "3":
                checkTodo(); break;
            case "4":
                removeTodo(); break;
            case "5":
                console.log("종료합니다."); break;
            default: console.log("메뉴 번호를 다시 확인하세요.")
        }
    }

    


