const mudarCor = () => {
    const cores = ["#9ba532", "#5ac7aa", "#9adcb9", "#fafcd3", "#efeba9", "#497a83"];
    const [corAleatoria] = cores.sort(() => Math.random() - 0.5);
    document.body.style.backgroundColor = corAleatoria;
};