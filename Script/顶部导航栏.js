// 使用JavaScript监听滚动事件，并根据滚动的方向决定是否隐藏或显示导航栏：
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.顶部导航栏');
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && st > 0) {
        // 向下滚动且不在顶部
        navbar.classList.add('show');
    } else if (st < lastScrollTop && st > 0) {
        // 向上滚动且不在顶部
        navbar.classList.remove('show');
    } else if (st === 0) {
        // 在顶部
        navbar.classList.remove('show');
    }

    lastScrollTop = st <= 0 ? 0 : st; // 防止负值
}, false);