import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function App() {
  const [coins, setCoins] = useState(0);
  const [watched, setWatched] = useState(0);
  const [loading, setLoading] = useState(false);

  const watchAd = () => {
    if (loading) return;

    setLoading(true);

    // DEMO: simulojmë një reklamë 3 sekonda
    setTimeout(() => {
      setCoins((oldCoins) => oldCoins + 10);
      setWatched((oldWatched) => oldWatched + 1);
      setLoading(false);

      Alert.alert(
        '🎉 Reward!',
        'Ke fituar +10 coins!'
      );
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Watch & Earn 💰</Text>

      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Your Coins</Text>

        <Text style={styles.balance}>
          🪙 {coins}
        </Text>

        <Text style={styles.small}>
          Coins në llogarinë tënde
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          loading && styles.buttonDisabled
        ]}
        onPress={watchAd}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading
            ? '⏳ Reklama po shfaqet...'
            : '📺 Shiko reklamën +10'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.info}>
        Reklama të shikuara: {watched}
      </Text>

      <View style={styles.rewardBox}>
        <Text style={styles.rewardTitle}>
          🎁 Reward
        </Text>

        <Text style={styles.rewardText}>
          Çdo reklamë e përfunduar = +10 coins
        </Text>
      </View>

      <View style={styles.cashout}>
        <Text style={styles.cashoutTitle}>
          🪙 Coins
        </Text>

        <Text style={styles.cashoutText}>
          Balanca: {coins} coins
        </Text>

        <Text style={styles.cashoutText}>
          Reklamat: {watched}
        </Text>
      </View>

      <Text style={styles.demo}>
        DEMO — reklama reale do të lidhet më vonë
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7f7',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  balanceBox: {
    backgroundColor: '#176b68',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
  },

  balanceLabel: {
    color: 'white',
    fontSize: 20,
  },

  balance: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 5,
  },

  small: {
    color: 'white',
    marginTop: 5,
  },

  button: {
    backgroundColor: '#ff9800',
    padding: 20,
    borderRadius: 20,
    marginTop: 25,
    alignItems: 'center',
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },

  info: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },

  rewardBox: {
    backgroundColor: '#fff3cd',
    borderRadius: 20,
    padding: 20,
    marginTop: 25,
  },

  rewardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  rewardText: {
    fontSize: 16,
  },

  cashout: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },

  cashoutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cashoutText: {
    fontSize: 16,
    marginTop: 5,
  },

  demo: {
    textAlign: 'center',
    marginTop: 25,
    color: '#777',
  },
});
