import {by} from 'protractor';
import {Question, Target, Text} from 'serenity-js/protractor';

export class TodoList {
    static What_Needs_To_Be_Done = Target.the('"What needs to be done?" input box')
        .located(by.css('[ng-model=newTodo]'));
    static Items = Target.the('List of Items')
        .located(by.repeater('todo in todos'));
    static Items_Displayed: Question<PromiseLike<string[]>> = Text.ofAll(TodoList.Items);
}
