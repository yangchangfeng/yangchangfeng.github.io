var ull = document.getElementById('parent')
var enter = document.getElementById('enter');
var count = 0
var allinput
    //input输入框的事件
enter.addEventListener('keydown', function(e) {
        if (e.key === "Enter" && enter.value.trim()) {
            count++
            var aa = document.createElement('p')
            ull.appendChild(aa)
            aa.outerHTML = `<li class='lili${count} lili'>
            <input type="checkbox">
            <p contentEditable="true">${enter.value}</p>
            <span class='close'>x</span></li>
        </li>`
            enter.value = ''
        }
        allinput = document.querySelectorAll('.lili input')
        console.log(allinput)
    })
    // Clear completed 事件,cc事件要有completed出现才有
document.addEventListener('click', function(e) {
    let count = 0
    let allli = document.querySelectorAll('.lili')
    for (let i = 0; i < allli.length; i++) {
        let x = allli[i]
        let t = allli[i].firstElementChild.checked
        if (t == true) {
            cc.style.display = 'inline-block'
        } else {
            count++
        }
    }
    if (count === allli.length) {
        cc.style.display = 'none'
    }
})
var cc = document.querySelector('#cc')
cc.addEventListener('click', function(e) {
        console.log(e)
        let allli = document.querySelectorAll('.lili')
        for (let i = 0; i < allli.length; i++) {
            let x = allli[i]
            let t = allli[i].firstElementChild.checked
            if (t == true) {
                x.parentElement.removeChild(x)
            }
            cc.style.display = 'none'
        }
    })
    //写active事件，将没做的列出来
var active = document.querySelector('#active')
active.addEventListener('click', function(e) {
    activego()
})

function activego() {
    let allli = document.querySelectorAll('.lili')
    for (let i = 0; i < allli.length; i++) {
        let x = allli[i]
        let t = allli[i].firstElementChild.checked
        if (t == true) {
            x.style.display = 'none'
        } else {
            x.style.display = 'block'
        }

    }
}
//写all 事件，将所有的项都列出来
var all = document.querySelector('#all')
all.addEventListener('click', function(e) {
        let allli = document.querySelectorAll('.lili')
        for (let i = 0; i < allli.length; i++) {
            let x = allli[i]
            let t = allli[i].firstElementChild.checked
            if (x.style.display = 'none') {
                x.style.display = 'block'
            }
        }
    })
    //将completed事件
var completed = document.querySelector('#completed')
completed.addEventListener('click', function(e) {
    completedgo()
})

function completedgo() {
    let allli = document.querySelectorAll('.lili')
    for (let i = 0; i < allli.length; i++) {
        let x = allli[i]
        let t = allli[i].firstElementChild.checked
        if (t == true) {
            x.style.display = 'block'
        } else {
            x.style.display = 'none'
        }
    }
}
//写全选事件
var allchecked = document.querySelector('#allchecked')
allchecked.addEventListener('click', function(e) {
        let allli = document.querySelectorAll('.lili')
        for (let i = 0; i < allli.length; i++) {
            let x = allli[i]
            let t = allli[i].firstElementChild.checked
            x.style.display == 'block'
            if (allchecked.checked == true) {
                allli[i].firstElementChild.checked = true
            } else {
                allli[i].firstElementChild.checked = false
            }

        }

    })
    //在section上设置一个监听事件，确认上次的点击方位是否在active或者completed等地方，是的话在这两个地方如果点击了list也会动态变化。
var lastclick = all
var newclick = document.createElement('i')
var spy = document.querySelector('#spy')
spy.addEventListener('click', function(e) {
    var newclick = e.target
    console.log(e.target, e)
    console.log(e.target.tagName, e.target.id)
    console.log(typeof e.target.tagName)
    if (newclick == active || newclick == completed || newclick == all) {
        lastclick = newclick
    }
    //为什么把下面两个if放在上面if的里面就没用
    if (lastclick == active) {
        console.log(lastclick == active)
        activego()
    }
    if (lastclick == completed) {
        completedgo()
    }
    //x
    if (e.target.tagName == 'INPUT') {
        e.target.nextElementSibling.classList.toggle('linestyle')
    }
    if (e.target.id == 'allchecked') {
    	console.log(e.target.id == 'allchecked')
        for(let i=0;i<allinput.length;i++){
        	allinput[i].nextElementSibling.classList.toggle('linestyle')
        }

    }

})
