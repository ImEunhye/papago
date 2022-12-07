const [sourceSelect, targetSelect] = document.getElementsByClassName('form-select');
const [sourceTextArea, targetTextArea] = document.querySelectorAll('textarea');
const copyBtn1 = document.getElementById('copy-btn1');
const copyBtn2 = document.getElementById('copy-btn2');
const textLenArea = document.getElementById('text-length');
const translateBtn = document.getElementById('translate-btn');

let targetLanguage = 'en';

targetSelect.addEventListener('change', () => {
    targetLanguage = targetSelect.value;
});

let debouncer;

sourceTextArea.addEventListener('input', (event) => {
    const textLen = sourceTextArea.value.length;
    const text = sourceTextArea.value;
    if (textLen > 5000) {
        sourceTextArea.value = text.substring(0, 5000);
        textLenArea.textContent = '10/5000';


    } else {
        textLenArea.textContent = textLen + '/5000';
    }

});

translateBtn.addEventListener('click', () => {
    const text = sourceTextArea.value; // 번역할 텍스트
    if (!text) return;

    // 언어감지 URL
    const url = '/detect';

    // 보낼 데이터
    const requestData = {
        query: text
    };

    // fetch() 부가 옵션
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData),
    };

    // 언어 감지 요청
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const sourceLanguage = data.langCode; // 'ko'
            sourceSelect.value = sourceLanguage;

            if (sourceLanguage === targetLanguage) {
                if (sourceLanguage === 'ko') {
                    targetLanguage = 'en';
                } else if (sourceLanguage === 'en') {
                    targetLanguage = 'ko';
                }
            }


            // 언어 번역 요청 URL
            const url = '/translate';

            // 보낼 데이터
            const requestData = {
                source: sourceLanguage,
                target: targetLanguage,
                text,
            };

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData),
            };

            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    const result = data.message.result;
                    targetTextArea.value = result.translatedText;
                    targetSelect = result.tarLangType;
                });
        });
})


const copyBtnClickEvent = (btnName) => {
    if (btnName === copyBtn1) {
        sourceTextArea.select();
    } else {
        targetTextArea.select();
    }
    document.execCommand('copy');
}

copyBtn1.addEventListener('click', () => {
    copyBtnClickEvent(copyBtn1);
});

copyBtn2.addEventListener('click', () => {
    copyBtnClickEvent(copyBtn2);
});


