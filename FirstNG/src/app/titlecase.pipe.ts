import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "titlecase"
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string, args?: any) {
        if (typeof(value) === 'string') {
            let words: string[] = value.split(" ");
            words.forEach((word, index, words) => {
                word = word.toLowerCase();
                if (index === 0 || (word !== "of" && word !== "the")) {
                    word = word.charAt(0).toUpperCase() + word.slice(1);
                }
                words[index] = word;
            })

            return words.join(" ");
        }
    }
}