const sprintBacklogs = document.querySelectorAll('.sprint-backlog');
    
sprintBacklogs.forEach(sb => {
    let sum = 0;
    sb.querySelectorAll('.story-point').forEach(sp => sum += parseInt(sp.textContent));
    sb.parentElement.parentElement.querySelector('.story-points-sum').textContent = sum;
});