var states = ['alaska', 'alabama', 'arkansas', 'missouri', 'texas','nevada','california'];

console.log(
    states.filter((state)=> {
        if (state.startsWith('a')) {
            return state
        }
    })
    .map((state)=> {
        return state.slice(0,3)
    })
    .reduce((acc, cur)=> {
        return acc+cur.length
    }, 0)
);
