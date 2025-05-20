const arraNumber: Array<number> = [1, 2, 3, 4, 5, 6];

function myPromise(): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}
