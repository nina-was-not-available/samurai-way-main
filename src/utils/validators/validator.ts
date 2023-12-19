
export const requiredField = (value: any) => {
    let message = 'Field is required'
    if (value) {
        return undefined
    }
    return message
};


export const maxLengthTS = (number: number) => (value: string) => {
    let message = `Max length is ${number}`
    if (value.length > number) {
        return message
    }
    return undefined
};
