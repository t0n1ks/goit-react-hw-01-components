export const generateRandomColor = () => {
    const colors = ['#f55d3e', '#4287f5', '#34c75a', '#f5c542', '#8134f5'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };