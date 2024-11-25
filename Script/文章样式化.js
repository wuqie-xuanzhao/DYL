// 生成的文章标题标签不带id，通过这个函数给标题标签添加id，以实现页面跳转
// JavaScript提供了更灵活的方法来实现页面内跳转，特别是当需要滚动动画效果时。可以使用scrollIntoView方法来实现这一点。

function scrollToSection(event) {
    event.preventDefault(); // 阻止默认行为

    const targetId = event.currentTarget.getAttribute('href'); // 获取目标元素的ID
    const targetElement = document.querySelector(targetId); // 通过ID选择目标元素

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center', 
            inline: 'nearest' 
        });
    }
}