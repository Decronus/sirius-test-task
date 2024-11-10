<template>
    <div min-h-screen mb-20>
        <h1 font-700 main-text-dark text-10 mb-12>Dashboard</h1>

        <DashboardBlock title="General overview" mb-20>
            <div flex flex-row justify-between gap-3 class="max-md:flex-col">
                <GeneralOverviewDashboard type="invoices" />
                <GeneralOverviewDashboard type="payments" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Financial summary" mb-20>
            <div flex flex-row justify-between gap-3 class="max-md:flex-col">
                <FinancialSummaryChartDashboard type="invoices" />
                <FinancialSummaryChartDashboard type="payments" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Cash flow">
            <CashFlowBlock />
        </DashboardBlock>
    </div>
</template>

<script setup lang="ts">
import DashboardBlock from '~/components/DashboardBlock.vue';
import LineChart from '~/components/charts/LineChart.vue';

useHead({
    title: 'Dashboard',
});
</script>

<style scoped></style>
