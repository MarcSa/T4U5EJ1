<script setup lang="ts">
import { ref } from 'vue';

import type { Figure } from '@/interfaces/figure.interface';
import { figures } from '@/data/figures';

const isFigureSelected = ref<boolean>(false);
const figureAttrs = ref<Figure['attr']>([]);
const figureFormSelected = ref<Figure['form']>('');
const figureCalcSelected = ref<Figure['calc']>(() => 0);
const selectFigure = (figure: Figure): void => {
    isFigureSelected.value = true;
    figureAttrs.value = figure.attr;
    figureFormSelected.value = figure.form;
    figureCalcSelected.value = figure.calc;
};
</script>

<template>
    <div class="card">
        <div class="card-header text-bg-dark text-center">
            <h1>Calculadora de Áreas</h1>
            <p class="lead">Calcula áreas de figuras geométricas</p>
        </div>
        <div class="card-body">
            <p><strong>Selecciona una figura:</strong></p>
            <div id="figures" class="row justify-content-md-center">
                <div class="figure col-6 mb-4" v-for="figure of figures" :key="figure.name">
                    <button
                        type="button"
                        class="btn btn-secondary btn-lg w-100"
                        :class="`btn-${figure.name.toLowerCase()}`"
                        @click="selectFigure(figure)"
                    >
                        {{ figure.name }}
                    </button>
                </div>
            </div>
        </div>
        <div class="area-section px-4" v-if="isFigureSelected">
            <hr />
            <div class="row">
                <div v-for="figureAttr of figureAttrs" class="col-6" :key="figureAttr.tag">
                    <p>
                        <strong>{{ figureAttr.name }}({{ figureAttr.tag }}):</strong>
                    </p>
                    <div class="mb-4">
                        <input type="number" min="0" v-model.number="figureAttr.variable" />
                    </div>
                </div>
            </div>
            <div class="row p-3">
                <div class="col-12 text-center rounded-1 bg-body-tertiary p-3">
                    <p class="text-body-tertiary fst-italic formula-area">
                        {{ figureFormSelected }}
                    </p>
                    <h3>{{ figureCalcSelected(...figureAttrs.map((attr) => attr.variable)) }}</h3>
                    <p class="text-body-tertiary mb-0">unidades cuadradas</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
