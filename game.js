let playerRage = 0;
let enemyRage = 0;

// 普通攻击语句库（怒气值+5）
const normalInsults = [
    "你是不是从幼儿园毕业的？真心感觉智商低下",
    "看你这么努力，我真想问问你脑袋里到底装了什么",
    "你这水平也敢在我面前说话，是想让我笑死吗",
    "真不敢相信你居然能做出这种蠢事",
    "你是不是脑袋被门夹了，做事这么傻"
];

// 冷嘲热讽语句库（怒气值+7）
const sarcasticInsults = [
    "哇，你这么聪明的头脑，能想出这些不堪入目的主意，真让我刮目相看",
    "你是不是脑袋被门夹了，做这种事都能这么自信？",
    "看你这么努力，真是想给你颁个'最傻努力奖'",
    "哇，你真的是世上最聪明的人，居然能把事情做得这么'完美'",
    "真佩服你，居然能在这么低的水平上自信得这么高"
];

// 恶意挑衅语句库（怒气值+10）
const provokeInsults = [
    "你这智商，连猪都不如",
    "你是不是吃了脑白金才这么脑残的？",
    "看你做事都想给你送个'年度傻瓜奖'，真是不容易",
    "你这种水平还敢出来丢人现眼？",
    "建议你回炉重造，这智商实在救不了"
];

// AI回复语句库
const normalResponses = [
    "我才懒得理你，真是个没趣的人",
    "你说这些也就只能安慰你自己吧，真无聊",
    "哇，我真是想笑，你这个傻逼",
    "哈哈，真是个小丑，别再说话了",
    "你这是认真的吗？连这种话都说得出口"
];

const sarcasticResponses = [
    "哇，真是神人，我都没法反驳你了",
    "你居然能做到这点，真是牛逼",
    "哇，真佩服你，居然能把事做成这样",
    "你真是个绝世天才，我真的无言以对",
    "哈哈，你这招真高明，我差点就信了"
];

const provokeResponses = [
    "哇，居然能说出这种话，你真是够了",
    "你觉得我会受伤吗？真是笑话",
    "别以为你这样就能让我害怕，你不过是个小丑",
    "你以为你能让我愤怒？想得倒美",
    "哇，居然敢这么挑衅我，真是自找麻烦"
];

function getRandomInsult(insultArray) {
    return insultArray[Math.floor(Math.random() * insultArray.length)];
}

function attack(rageAmount) {
    // 根据攻击类型选择对应的语句库
    if (rageAmount === 5) {
        showInsultOptions(normalInsults, rageAmount);
    } else if (rageAmount === 7) {
        showInsultOptions(sarcasticInsults, rageAmount);
    } else if (rageAmount === 10) {
        showInsultOptions(provokeInsults, rageAmount);
    }
}

function showInsultOptions(insultArray, rageAmount) {
    // 创建选项对话框
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'insult-options';
    optionsDiv.style.position = 'fixed';
    optionsDiv.style.top = '50%';
    optionsDiv.style.left = '50%';
    optionsDiv.style.transform = 'translate(-50%, -50%)';
    optionsDiv.style.backgroundColor = 'white';
    optionsDiv.style.padding = '20px';
    optionsDiv.style.border = '2px solid #333';
    optionsDiv.style.zIndex = '1000';

    // 随机选择三个不重复的语句
    const selectedInsults = [];
    while (selectedInsults.length < 3) {
        const insult = getRandomInsult(insultArray);
        if (!selectedInsults.includes(insult)) {
            selectedInsults.push(insult);
        }
    }

    // 添加选项按钮
    selectedInsults.forEach(insult => {
        const button = document.createElement('button');
        button.textContent = insult;
        button.style.display = 'block';
        button.style.margin = '10px 0';
        button.onclick = () => {
            executeAttack(insult, rageAmount);
            document.body.removeChild(optionsDiv);
        };
        optionsDiv.appendChild(button);
    });

    document.body.appendChild(optionsDiv);
}

function executeAttack(insult, rageAmount) {
    // 玩家攻击
    enemyRage = Math.min(100, enemyRage + rageAmount);
    addToConversation(insult, true);
    updateRageBars();

    // 检查游戏是否结束
    if (enemyRage >= 100) {
        endGame(true);
        return;
    }

    // AI根据攻击类型选择对应的回复
    setTimeout(() => {
        const aiDamage = Math.floor(Math.random() * 8) + 3; // 3-10的随机伤害
        playerRage = Math.min(100, playerRage + aiDamage);
        
        // 根据攻击类型选择回复
        let response;
        if (rageAmount === 5) {
            response = getRandomInsult(normalResponses);
        } else if (rageAmount === 7) {
            response = getRandomInsult(sarcasticResponses);
        } else if (rageAmount === 10) {
            response = getRandomInsult(provokeResponses);
        }
        
        addToConversation(response, false);
        updateRageBars();

        if (playerRage >= 100) {
            endGame(false);
        }
    }, 1000);
}

function updateRageBars() {
    document.getElementById('playerRage').style.width = `${playerRage}%`;
    document.getElementById('enemyRage').style.width = `${enemyRage}%`;
    document.getElementById('playerRageText').textContent = playerRage;
    document.getElementById('enemyRageText').textContent = enemyRage;
}

function addToConversation(text, isPlayer) {
    const conversation = document.getElementById('conversation');
    const message = document.createElement('p');
    message.textContent = `${isPlayer ? '玩家' : '对手'}: ${text}`;
    conversation.appendChild(message);
    conversation.scrollTop = conversation.scrollHeight;
}

function endGame(playerWon) {
    document.getElementById('gameOver').classList.remove('hidden');
    document.getElementById('gameResult').textContent = 
        playerWon ? "你赢了！成功激怒对手！" : "你输了！被对手激怒了！";
}

function resetGame() {
    playerRage = 0;
    enemyRage = 0;
    document.getElementById('gameOver').classList.add('hidden');
    document.getElementById('conversation').innerHTML = '';
    updateRageBars();
}

// 初始化游戏
updateRageBars(); 