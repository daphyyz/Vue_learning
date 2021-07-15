new Vue({
    el: "#app",
    data: {
        myChoice: null,
        count: 3
    },
    methods: {
        startGame: function() {
            if(this.myChoice === null) {
                alert('가위 바위 보 중 하나를 선택해주세요.')
            } else {
                let countDown = setInterval(()=> {
                    this.count --
                    if(this.count === 0) {
                        clearInterval(countDown)
                    }
                }, 1000)
                //console.log('선택 완료!')
            }
        }
    }
});
