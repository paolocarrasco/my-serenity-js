import {listOf} from '../../../spec/text';
import {AddTodoItem} from '../../screenplay/tasks/add-todo-item';
import {CheckTodoItems} from '../../screenplay/tasks/check-todo-items';
import {CheckTotalTodoItems} from '../../screenplay/tasks/check-total-todo-items';
import {Start} from '../../screenplay/tasks/start';

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
            CheckTodoItems.hasSameContentAs(listOf(items)),
        );
    });

    this.Then(/^I can see that I have (\d+) total items$/, function(quantity: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            CheckTotalTodoItems.is(quantity),
        );
    });
};
