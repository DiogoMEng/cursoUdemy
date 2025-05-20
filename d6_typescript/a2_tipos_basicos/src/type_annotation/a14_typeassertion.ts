// Non num assertion
const body = document.querySelector('body')!;
body.style.background = 'red';

// Type assertion
const body1 = document.querySelector('body') as HTMLBodyElement;
body1.style.background = 'red';
