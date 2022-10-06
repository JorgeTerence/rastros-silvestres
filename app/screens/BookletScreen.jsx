import * as Linking from 'expo-linking';
import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

import Body from '../components/Body';
import { brand } from '../config/colors';

const uri =
	'https://observatoriodabicicleta.org.br/uploads/2021/05/Cartilha-ciclista-SBO-Prefeitura-SBO.pdf';

export default () => (
	<Body>
		<Text style={styles.title}>Cartilha do Ciclista SBO</Text>
		<Button
			title="Download"
			onPress={() => Linking.openURL(uri)}
			color={brand.deepPool}
		/>
	</Body>
);

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 35,
	},
});
