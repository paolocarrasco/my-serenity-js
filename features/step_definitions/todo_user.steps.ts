import {See} from 'serenity-js/protractor';
import {listOf} from '../../spec/text';
import {hasSameContentAs} from '../custom-assertions';
import {TodoList} from '../screenplay/targets/todo-list';
import {AddTodoItem} from '../screenplay/tasks/add-todo-item';
import {Start} from '../screenplay/tasks/start';

export = function todoUserSteps() {

    this.Given(/^that (.+) has a TODO list containing (.+)$/, function(name: string, items: string) {
        return this.stage.theActorCalled(name).attemptsTo(
            Start.withATodoListContaining(listOf(items)),
        );
    });

    this.When(/^s?he adds (.+?) to (?:his|her) list$/, function(itemName: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AddTodoItem.called(itemName),
        );
    });

    this.Then(/^(?:his|her) todo list should contain (.+)$/, function(items: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            See.if(TodoList.Items_Displayed, hasSameContentAs(listOf(items))));
    });
};
