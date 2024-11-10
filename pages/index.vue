<template>
    <div class="min-h-screen">
        <h1 class="font-700 main-text-dark text-10 mb-12">Dashboard</h1>

        <DashboardBlock title="General overview" mb-20>
            <div flex flex-col justify-between gap-3 class="md:flex-row">
                <GeneralOverviewDashboard type="invoices" />
                <GeneralOverviewDashboard type="payments" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Financial summary" mb-20>
            <div flex flex-col justify-between gap-3 class="md:flex-row">
                <FinancialSummaryChartDashboard type="invoices" />
                <FinancialSummaryChartDashboard type="payments" />
            </div>
        </DashboardBlock>

        <DashboardBlock title="Cash flow"></DashboardBlock>
    </div>
</template>

<script setup lang="ts">
import DashboardBlock from '~/components/DashboardBlock.vue';

useHead({
    title: 'Dashboard',
});
</script>

<style scoped></style>
