document.addEventListener("DOMContentLoaded", () => {
    // 统计纯文本字数
    function getTextContentWordCount(selector) {
        let elements = document.querySelectorAll(selector);
        let wordCount = 0;

        elements.forEach(element => {
            let text = element.textContent || ""; // 获取文字内容
            text = text.replace(/\s+/g, ""); // 移除所有空白字符
            wordCount += text.length; // 计算字数
        });

        return wordCount;
    }

    const containerClass = ".文章主体"; // 替换为你的实际类名

    // 统计 p 标签中的纯文本字数
    let pWordCount = getTextContentWordCount(`${containerClass} p`);

    // 统计 h1 到 h6 标签中的纯文本字数
    let headingWordCount = 0;
    for (let i = 1; i <= 6; i++) {
        headingWordCount += getTextContentWordCount(`${containerClass} h${i}`);
    }

    // 统计总的纯文本字数
    let totalWordCount = getTextContentWordCount(`${containerClass} p, ${containerClass} h1, ${containerClass} h2, ${containerClass} h3, ${containerClass} h4, ${containerClass} h5, ${containerClass} h6`);

    console.log(`p 标签纯文本字数: ${pWordCount}`);
    console.log(`h1-h6 标签纯文本字数: ${headingWordCount}`);
    console.log(`总纯文本字数: ${totalWordCount}`);

    let 字数 = document.querySelector(`.字数`)
    字数.innerText = `字数：${totalWordCount}字`;
});
