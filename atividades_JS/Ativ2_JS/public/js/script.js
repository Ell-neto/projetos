document.addEventListener('DOMContentLoaded', function () {
    const verQuestaoButton = document.getElementById('verQuestao');
    const form = document.getElementById('questaoForm');

    verQuestaoButton.addEventListener('click', function () {
        const selectedQuestao = document.querySelector('input[name="questao"]:checked');
        if (selectedQuestao) {
            const questaoValue = selectedQuestao.value;
            window.location.href = `/atividades2/${questaoValue}`;
        } else {
            alert('Por favor, selecione uma questão.');
        }
    });
});
