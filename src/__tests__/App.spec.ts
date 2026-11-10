import { it, expect, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { figures } from '@/data/figures';

describe('Calculadora de Áreas', () => {
    describe('Cuadrado', () => {
        const name = 'Cuadrado'.toLocaleLowerCase();
        const selectedFigure = figures.find((figure) => figure.name.toLocaleLowerCase() === name);
        if (!selectedFigure) return;
        const expectedFormula = selectedFigure.form;
        const selectedFigureForm = selectedFigure.calc;

        it('should display an input when Square is selected.', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Arrange & Act
            await figureBtn.trigger('click');
            const inputCount = wrapper.findAll('input').length;

            // Assert
            expect(inputCount).toBe(1);
        });

        it('should correctly calculate the area of ​​the square', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);
            const value = 8;

            // Arrange & Act
            await figureBtn.trigger('click');
            await wrapper.get('input').setValue(value);
            const resultContent = wrapper.get('h3');

            // Assert
            expect(resultContent.text()).toContain(selectedFigureForm(value).toString());
        });

        it('should show the correct formula for the Square', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Act
            await figureBtn.trigger('click');
            const resultContent = wrapper.get('.formula-area');

            // Assert
            expect(resultContent.text()).toContain(expectedFormula);
        });
    });
    describe('Rectángulo', () => {
        const name = 'Rectángulo'.toLocaleLowerCase();
        const selectedFigure = figures.find((figure) => figure.name.toLocaleLowerCase() === name);
        if (!selectedFigure) return;

        const expectedFormula = selectedFigure.form;
        const selectedFigureForm = selectedFigure.calc;

        it('should display two inputs when Rectangle is selected.', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Arrange & Act
            await figureBtn.trigger('click');
            const inputCount = wrapper.findAll('input').length;

            // Assert
            expect(inputCount).toBe(2);
        });

        it('should correctly calculate the area of ​​the Rectangle', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);
            const a = 8;
            const b = 5;

            // Arrange & Act
            await figureBtn.trigger('click');
            const [baseInput, heightInput] = wrapper.findAll('input');
            if (!baseInput || !heightInput) {
                throw new Error('Falten els inputs del rectangle');
            }
            await baseInput.setValue(a);
            await heightInput.setValue(b);
            const resultContent = wrapper.get('h3');

            // Assert
            expect(resultContent.text()).toContain(selectedFigureForm(a, b).toString());
        });

        it('should show the correct formula for the Rectangle', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Act
            await figureBtn.trigger('click');
            const resultContent = wrapper.get('.formula-area');

            // Assert
            expect(resultContent.text()).toContain(expectedFormula);
        });
    });
    describe('Círculo', () => {
        const name = 'Círculo'.toLocaleLowerCase();
        const selectedFigure = figures.find((figure) => figure.name.toLocaleLowerCase() === name);
        if (!selectedFigure) return;
        const expectedFormula = selectedFigure.form;
        const selectedFigureForm = selectedFigure.calc;

        it('should display an input when circle is selected.', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Arrange & Act
            await figureBtn.trigger('click');
            const inputCount = wrapper.findAll('input').length;

            // Arrange
            expect(inputCount).toBe(1);
        });

        it('should correctly calculate the area of ​​the circle', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);
            const value = 8;

            // Arrange & Act
            await figureBtn.trigger('click');
            await wrapper.get('input').setValue(value);
            const resultContent = wrapper.get('h3');

            // Assert
            expect(resultContent.text()).toContain(selectedFigureForm(value).toString());
        });

        it('should show the correct formula for the circle', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Act
            await figureBtn.trigger('click');
            const resultContent = wrapper.get('.formula-area');

            // Assert
            expect(resultContent.text()).toContain(expectedFormula);
        });
    });
    describe('Triángulo', () => {
        const name = 'Triángulo'.toLocaleLowerCase();
        const selectedFigure = figures.find((figure) => figure.name.toLocaleLowerCase() === name);
        if (!selectedFigure) return;

        const expectedFormula = selectedFigure.form;
        const selectedFigureForm = selectedFigure.calc;

        it('should display two inputs when triangle is selected.', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Arrange & Act
            await figureBtn.trigger('click');
            const inputCount = wrapper.findAll('input').length;

            // Assert
            expect(inputCount).toBe(2);
        });

        it('should correctly calculate the area of ​​the triangle', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);
            const a = 8;
            const b = 5;

            // Arrange & Act
            await figureBtn.trigger('click');
            const [baseInput, heightInput] = wrapper.findAll('input');
            if (!baseInput || !heightInput) {
                throw new Error('Falten els inputs del triánglulo');
            }
            await baseInput.setValue(a);
            await heightInput.setValue(b);
            const resultContent = wrapper.get('h3');

            // Assert
            expect(resultContent.text()).toContain(selectedFigureForm(a, b).toString());
        });

        it('should show the correct formula for the triangle', async () => {
            // Arrange
            const wrapper = mount(App);
            const figureBtn = wrapper.get(`.btn-${name}`);

            // Act
            await figureBtn.trigger('click');
            const resultContent = wrapper.get('.formula-area');

            // Assert
            expect(resultContent.text()).toContain(expectedFormula);
        });
    });
});
