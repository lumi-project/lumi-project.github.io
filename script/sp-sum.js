const sprintBacklogs = document.querySelectorAll('.sprint-backlog');
    
sprintBacklogs.forEach(sb => {
    let sum = 0;
    sb.querySelectorAll('.story-point span').forEach(sp => sum += parseInt(sp.textContent));
    sb.parentElement.parentElement.querySelector('.story-points-sum span').textContent = sum;
});