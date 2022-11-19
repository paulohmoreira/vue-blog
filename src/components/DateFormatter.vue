<template>
  <div>
    {{ dateBuilder() }}
  </div>
</template>

<script>

  export default {
    name: 'DateFormatter',
    props: {
        dateNumber: Number,
    },
    methods: {
      dateBuilder() {
        let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let secondsToMilliseconds = this.dateNumber * 1000;
        let date = new Date(secondsToMilliseconds);
        let day = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        return `${day} de ${month} de ${year}`
      },
    },
  }
</script>