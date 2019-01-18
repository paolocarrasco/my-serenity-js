import {protractor} from 'protractor';
import {serenity} from 'serenity-js';
import {Actor, BrowseTheWeb} from 'serenity-js/protractor';
import {expect} from '../../spec/expect';
import {listOf} from '../../spec/text';
import {TodoList} from '../screenplay/targets/todo-list';
import {AddTodoItem} from '../screenplay/tasks/add-todo-item';
import {Start} from '../screenplay/tasks/start';

export = function todoUserSteps() {

    this.setDefaultTimeout(30 * 1000);

    const stage = serenity.callToStageFor({
        actor: name => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser)),
    });

    this.Given(/^that (.+) has a TODO list containing (.*)$/, (name: string, items: string) =>
        stage.theActorCalled(name).attemptsTo(
            Start.withATodoListContaining(listOf(items)),
        ));

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, (itemName: string) =>
        stage.theActorInTheSpotlight().attemptsTo(
            AddTodoItem.called(itemName),
        ));

    this.Then(/^.* todo list should contain (.*?)$/, (items: string) =>
        expect(stage.theActorInTheSpotlight().toSee(TodoList.Items_Displayed))
            .eventually.deep.equal(listOf(items)));
};
