// function resolveAfterSeconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 4000);
//     })
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfterSeconds();
//     console.log(result);
// }

// asyncCall();

async function foo(){
    await 1;
}

function foo1(){
    return Promise.resolve(1).then(() => undefined);
}

foo();
foo1();