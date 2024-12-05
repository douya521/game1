// 单词数据
const wordList = [
    // 基础日常用品
    { word: "apple", meaning: "苹果" },
    { word: "book", meaning: "书本" },
    { word: "pen", meaning: "钢笔" },
    { word: "desk", meaning: "桌子" },
    { word: "chair", meaning: "椅子" },
    { word: "phone", meaning: "电话" },
    { word: "computer", meaning: "电脑" },
    { word: "bag", meaning: "包" },
    { word: "watch", meaning: "手表" },
    { word: "key", meaning: "钥匙" },

    // 动物
    { word: "cat", meaning: "猫" },
    { word: "dog", meaning: "狗" },
    { word: "elephant", meaning: "大象" },
    { word: "lion", meaning: "狮子" },
    { word: "tiger", meaning: "老虎" },
    { word: "bird", meaning: "鸟" },
    { word: "fish", meaning: "鱼" },
    { word: "rabbit", meaning: "兔子" },
    { word: "monkey", meaning: "猴子" },
    { word: "panda", meaning: "熊猫" },

    // 食物和饮料
    { word: "bread", meaning: "面包" },
    { word: "milk", meaning: "牛奶" },
    { word: "water", meaning: "水" },
    { word: "coffee", meaning: "咖啡" },
    { word: "tea", meaning: "茶" },
    { word: "rice", meaning: "米饭" },
    { word: "meat", meaning: "肉" },
    { word: "egg", meaning: "鸡蛋" },
    { word: "fruit", meaning: "水果" },
    { word: "vegetable", meaning: "蔬菜" },

    // 自然环境
    { word: "sun", meaning: "太阳" },
    { word: "moon", meaning: "月亮" },
    { word: "star", meaning: "星星" },
    { word: "sky", meaning: "天空" },
    { word: "cloud", meaning: "云" },
    { word: "rain", meaning: "雨" },
    { word: "snow", meaning: "雪" },
    { word: "wind", meaning: "风" },
    { word: "tree", meaning: "树" },
    { word: "flower", meaning: "花" },

    // 颜色
    { word: "red", meaning: "红色" },
    { word: "blue", meaning: "蓝色" },
    { word: "green", meaning: "绿色" },
    { word: "yellow", meaning: "黄色" },
    { word: "black", meaning: "黑色" },
    { word: "white", meaning: "白色" },
    { word: "purple", meaning: "紫色" },
    { word: "orange", meaning: "橙色" },
    { word: "pink", meaning: "粉色" },
    { word: "brown", meaning: "棕色" },

    // 身体部位
    { word: "head", meaning: "头" },
    { word: "eye", meaning: "眼睛" },
    { word: "nose", meaning: "鼻子" },
    { word: "mouth", meaning: "嘴" },
    { word: "ear", meaning: "耳朵" },
    { word: "hand", meaning: "手" },
    { word: "foot", meaning: "脚" },
    { word: "leg", meaning: "腿" },
    { word: "arm", meaning: "手臂" },
    { word: "finger", meaning: "手指" },

    // 家庭成员
    { word: "father", meaning: "父亲" },
    { word: "mother", meaning: "母亲" },
    { word: "sister", meaning: "姐妹" },
    { word: "brother", meaning: "兄弟" },
    { word: "grandfather", meaning: "祖父" },
    { word: "grandmother", meaning: "祖母" },
    { word: "uncle", meaning: "叔叔" },
    { word: "aunt", meaning: "阿姨" },
    { word: "cousin", meaning: "表亲" },
    { word: "baby", meaning: "婴儿" },

    // 衣物
    { word: "shirt", meaning: "衬衫" },
    { word: "pants", meaning: "裤子" },
    { word: "dress", meaning: "连衣裙" },
    { word: "shoe", meaning: "鞋" },
    { word: "hat", meaning: "帽子" },
    { word: "sock", meaning: "袜子" },
    { word: "coat", meaning: "外套" },
    { word: "jacket", meaning: "夹克" },
    { word: "glove", meaning: "手套" },
    { word: "scarf", meaning: "围巾" },

    // 房间和家具
    { word: "room", meaning: "房间" },
    { word: "bed", meaning: "床" },
    { word: "table", meaning: "桌子" },
    { word: "door", meaning: "门" },
    { word: "window", meaning: "窗户" },
    { word: "wall", meaning: "墙" },
    { word: "floor", meaning: "地板" },
    { word: "ceiling", meaning: "天花板" },
    { word: "lamp", meaning: "灯" },
    { word: "mirror", meaning: "镜子" },

    // 交通工具
    { word: "car", meaning: "汽车" },
    { word: "bus", meaning: "公共汽车" },
    { word: "train", meaning: "火车" },
    { word: "plane", meaning: "飞机" },
    { word: "bike", meaning: "自行车" },
    { word: "ship", meaning: "船" },
    { word: "taxi", meaning: "出租车" },
    { word: "motorcycle", meaning: "摩托车" },
    { word: "helicopter", meaning: "直升机" },
    { word: "subway", meaning: "地铁" },

    // 职业
    { word: "teacher", meaning: "教师" },
    { word: "doctor", meaning: "医生" },
    { word: "nurse", meaning: "护士" },
    { word: "police", meaning: "警察" },
    { word: "driver", meaning: "司机" },
    { word: "chef", meaning: "厨师" },
    { word: "artist", meaning: "艺术家" },
    { word: "student", meaning: "学生" },
    { word: "engineer", meaning: "工程师" },
    { word: "farmer", meaning: "农民" },

    // 数字和时间
    { word: "one", meaning: "一" },
    { word: "two", meaning: "二" },
    { word: "three", meaning: "三" },
    { word: "four", meaning: "四" },
    { word: "five", meaning: "五" },
    { word: "time", meaning: "时间" },
    { word: "day", meaning: "天" },
    { word: "week", meaning: "周" },
    { word: "month", meaning: "月" },
    { word: "year", meaning: "年" },

    // 天气和季节
    { word: "spring", meaning: "春天" },
    { word: "summer", meaning: "夏天" },
    { word: "autumn", meaning: "秋天" },
    { word: "winter", meaning: "冬天" },
    { word: "hot", meaning: "热的" },
    { word: "cold", meaning: "冷的" },
    { word: "warm", meaning: "温暖的" },
    { word: "cool", meaning: "凉爽的" },
    { word: "sunny", meaning: "晴朗的" },
    { word: "rainy", meaning: "下雨的" },

    // 学校用品
    { word: "pencil", meaning: "铅笔" },
    { word: "eraser", meaning: "橡皮" },
    { word: "ruler", meaning: "尺子" },
    { word: "notebook", meaning: "笔记本" },
    { word: "paper", meaning: "纸" },
    { word: "scissors", meaning: "剪刀" },
    { word: "glue", meaning: "胶水" },
    { word: "crayon", meaning: "蜡笔" },
    { word: "marker", meaning: "记号笔" },
    { word: "backpack", meaning: "背包" },

    // 运动和游戏
    { word: "football", meaning: "足球" },
    { word: "basketball", meaning: "篮球" },
    { word: "tennis", meaning: "网球" },
    { word: "swimming", meaning: "游泳" },
    { word: "running", meaning: "跑步" },
    { word: "jumping", meaning: "跳跃" },
    { word: "dancing", meaning: "跳舞" },
    { word: "singing", meaning: "唱歌" },
    { word: "playing", meaning: "玩耍" },
    { word: "game", meaning: "游戏" },

    // 情感和状态
    { word: "happy", meaning: "快乐的" },
    { word: "sad", meaning: "伤心的" },
    { word: "angry", meaning: "生气的" },
    { word: "tired", meaning: "疲倦的" },
    { word: "hungry", meaning: "饥饿的" },
    { word: "thirsty", meaning: "口渴的" },
    { word: "sick", meaning: "生病的" },
    { word: "healthy", meaning: "健康的" },
    { word: "busy", meaning: "忙碌的" },
    { word: "lazy", meaning: "懒惰的" }
];

// 画布设置
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let currentTool = 'pen';
let currentColor = '#000000';
let currentSize = 5;

// 设置画布大小
function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.clientWidth - 2; // 减去边框宽度
    canvas.height = 400;
}

// 初始化
window.addEventListener('load', () => {
    resizeCanvas();
    // 设置默认画笔样式
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
});

window.addEventListener('resize', resizeCanvas);

// 绘图事件监听
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// 绘图功能
function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    const rect = canvas.getBoundingClientRect();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = currentTool === 'eraser' ? '#ffffff' : currentColor;
    ctx.lineWidth = currentSize;
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

// 工具选择
document.getElementById('penTool').addEventListener('click', () => {
    currentTool = 'pen';
});

document.getElementById('eraserTool').addEventListener('click', () => {
    currentTool = 'eraser';
});

document.getElementById('colorPicker').addEventListener('input', (e) => {
    currentColor = e.target.value;
});

document.getElementById('brushSize').addEventListener('input', (e) => {
    currentSize = e.target.value;
});

document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// 单词功能
let currentWordIndex = 0;
const speech = new SpeechSynthesisUtterance();
speech.lang = 'en-US';

// 显示当前单词
function displayWord() {
    const currentWord = wordList[currentWordIndex];
    document.getElementById('currentWord').textContent = currentWord.word;
    document.getElementById('meaning').textContent = currentWord.meaning;
}

// 发音功能
document.getElementById('speakBtn').addEventListener('click', () => {
    speech.text = wordList[currentWordIndex].word;
    window.speechSynthesis.speak(speech);
});

// 保存绘图
document.getElementById('saveDrawingBtn').addEventListener('click', () => {
    const imageData = canvas.toDataURL();
    const word = wordList[currentWordIndex].word;
    
    try {
        localStorage.setItem(`drawing_${word}`, imageData);
        
        // 更新统计
        const learnedCount = parseInt(document.getElementById('learnedCount').textContent);
        document.getElementById('learnedCount').textContent = learnedCount + 1;
        
        alert('绘图已保存！');
        
        // 调试信息
        console.log('Saved drawing for word:', word);
        console.log('Image data length:', imageData.length);
    } catch (e) {
        console.error('Error saving drawing:', e);
        alert('保存失败，请重试！');
    }
});

// 下一个单词
document.getElementById('nextWordBtn').addEventListener('click', () => {
    currentWordIndex = (currentWordIndex + 1) % wordList.length;
    displayWord();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// 复习模式相关变量
let reviewWords = [];
let currentReviewIndex = 0;
let reviewStats = {
    totalReviewed: 0,
    correctCount: 0,
    wrongCount: 0,
    streak: 0
};

// 开始复习
function startReview() {
    // 检查存储的图像
    checkStoredImages();
    
    // 获取所有已保存绘图的单词
    reviewWords = wordList
        .filter(word => {
            const hasImage = !!localStorage.getItem(`drawing_${word.word}`);
            console.log(`Checking word ${word.word}: ${hasImage ? 'has image' : 'no image'}`);
            return hasImage;
        })
        .sort(() => Math.random() - 0.5);
    
    if (reviewWords.length === 0) {
        alert('没有可复习的单词！请先保存一些单词的绘图。');
        return;
    }
    
    console.log('Starting review with words:', reviewWords.map(w => w.word));
    
    // 重置统计
    currentReviewIndex = 0;
    reviewStats = {
        totalReviewed: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0
    };
    
    // 显示第一个单词
    showReviewWord();
    updateReviewProgress();
}

// 显示复习单词
function showReviewWord() {
    if (currentReviewIndex >= reviewWords.length) {
        showReviewSummary();
        return;
    }
    
    const currentReview = reviewWords[currentReviewIndex];
    const imageData = localStorage.getItem(`drawing_${currentReview.word}`);
    
    // 显示图片
    const reviewImage = document.getElementById('reviewImage');
    if (imageData) {
        reviewImage.src = imageData;
        reviewImage.classList.remove('d-none');
    } else {
        console.error('No image data found for word:', currentReview.word);
    }
    
    // 重置输入和反馈
    document.getElementById('wordInput').value = '';
    document.getElementById('feedback').classList.add('d-none');
    document.getElementById('hintText').classList.add('d-none');
    
    // 更新进度显示
    updateReviewProgress();
    
    // 调试信息
    console.log('Showing review word:', currentReview.word);
    console.log('Image data exists:', !!imageData);
}

// 更新复习进度
function updateReviewProgress() {
    document.getElementById('reviewProgress').textContent = 
        `${currentReviewIndex + 1}/${reviewWords.length}`;
}

// 显示复习总结
function showReviewSummary() {
    const accuracy = Math.round((reviewStats.correctCount / reviewStats.totalReviewed) * 100);
    alert(`复习完成！
    总复习单词：${reviewStats.totalReviewed}
    正确：${reviewStats.correctCount}
    错误：${reviewStats.wrongCount}
    正确率：${accuracy}%
    最长连续正确：${reviewStats.streak}个`);
}

// 检查答案
function checkAnswer() {
    const userInput = document.getElementById('wordInput').value.trim().toLowerCase();
    const correctWord = reviewWords[currentReviewIndex].word.toLowerCase();
    const feedback = document.getElementById('feedback');
    
    feedback.classList.remove('d-none');
    reviewStats.totalReviewed++;
    
    if (userInput === correctWord) {
        feedback.textContent = '正确！';
        feedback.className = 'alert alert-success';
        reviewStats.correctCount++;
        reviewStats.streak++;
        
        // 更新统计
        const reviewedCount = parseInt(document.getElementById('reviewedCount').textContent);
        document.getElementById('reviewedCount').textContent = reviewedCount + 1;
        
        // 自动进入下一个
        setTimeout(() => {
            currentReviewIndex++;
            showReviewWord();
        }, 1000);
    } else {
        feedback.textContent = '错误，请重试！';
        feedback.className = 'alert alert-danger';
        reviewStats.wrongCount++;
        reviewStats.streak = 0;
    }
}

// 提示功能
document.getElementById('showHintBtn').addEventListener('click', () => {
    const currentWord = reviewWords[currentReviewIndex].word;
    const hintText = document.getElementById('hintText');
    hintText.textContent = `提示：首字母 "${currentWord[0]}"，长度 ${currentWord.length} 个字母`;
    hintText.classList.remove('d-none');
});

// 导航按钮
document.getElementById('prevReviewBtn').addEventListener('click', () => {
    if (currentReviewIndex > 0) {
        currentReviewIndex--;
        showReviewWord();
    }
});

document.getElementById('nextReviewBtn').addEventListener('click', () => {
    if (currentReviewIndex < reviewWords.length - 1) {
        currentReviewIndex++;
        showReviewWord();
    }
});

// 添加键盘事件支持
document.getElementById('wordInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// 初始化显示
displayWord();

// 在script.js中添加事件监听器的绑定
document.getElementById('startReviewBtn').addEventListener('click', startReview);
document.getElementById('checkWordBtn').addEventListener('click', checkAnswer);

// 添加调试功能
function checkStoredImages() {
    console.log('Checking stored images:');
    for (let word of wordList) {
        const imageData = localStorage.getItem(`drawing_${word.word}`);
        console.log(`${word.word}: ${imageData ? 'exists' : 'not found'}`);
    }
} 