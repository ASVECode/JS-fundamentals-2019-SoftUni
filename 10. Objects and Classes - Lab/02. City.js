function city(name, area, population, country, postCode) {
    let cityInfo = {
        name,
        area,
        population,
        country,
        postCode
    };
    Object.entries(cityInfo).forEach(element => console.log(element.join(' -> ')));
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");