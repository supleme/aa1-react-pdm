import { View, Text, FlatList, ScrollView, StyleSheet, SectionList } from 'react-native'
import React, { useEffect, useState } from 'react'

import cars from '../services/data';

// Define os tipos de dados para um carro e para uma lista de carros agrupados por marca
type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
}

type GroupedCars = { title: string; data: Car[] };

export default function List() {
  const [sortedCars, setSortedCars] = useState<GroupedCars[]>([]);
  
   // Ao montar o componente, ordena e agrupa os carros por marca
  useEffect(() => {
     setSortedCars(sortCarsByBrand(cars));
  }, []);

  // Função para ordenar e agrupar os carros por marca
  const sortCarsByBrand = (cars: Car[]): GroupedCars[] => {
    const sorted = cars.sort((a, b) => a.brand.localeCompare(b.brand));
    const groupedByBrand: GroupedCars[] = sorted.reduce((acc, car) => {
      const existingGroupIndex = acc.findIndex(group => group.title === car.brand);
      if (existingGroupIndex !== -1) {
        acc[existingGroupIndex].data.push(car);
      } else {
        acc.push({ title: car.brand, data: [car] });
      }
      return acc;
    }, []as GroupedCars[]);
    return groupedByBrand;
  };

  // Função para renderizar um item da lista de carros
  const renderItem = ({ item }: { item: Car }) => (
    <View style={styles.item}>
      <Text>{item.model} - {item.year}</Text>
    </View>
  );
  
  // Função para renderizar o cabeçalho de uma seção (marca)
  const renderSectionHeader = ({ section }: { section: GroupedCars }) => (
    <Text style={styles.brandText}>{section.title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sortedCars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    padding: 10,
  },
  brandText: {
    backgroundColor: 'grey',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 23,
  },
  item: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
  },
});