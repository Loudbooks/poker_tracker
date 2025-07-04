import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { PokerKeyboardView } from '../components/PokerKeyboardView';
import { theme } from '../theme';

export const PokerKeyboardExample: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleBack = () => {
    Alert.alert('返回', '你按了返回按鈕');
  };

  const handleSave = () => {
    if (selectedCards.length === 0) {
      Alert.alert('提醒', '請先選擇卡牌');
      return;
    }
    
    Alert.alert(
      '儲存成功', 
      `已選擇的卡牌：${selectedCards.join(', ')}`
    );
  };

  const handleCardSelect = (cards: string[]) => {
    setSelectedCards(cards);
    console.log('Selected cards:', cards);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>撲克鍵盤示例</Text>
        <Text style={styles.subtitle}>
          當前已選擇：{selectedCards.length > 0 ? selectedCards.join(', ') : '無'}
        </Text>
      </View>
      
      <PokerKeyboardView
        onBack={handleBack}
        onSave={handleSave}
        onCardSelect={handleCardSelect}
        initialAction="hole"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: theme.font.size.title,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.font.size.body,
    color: theme.colors.gray,
  },
}); 