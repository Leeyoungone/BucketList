import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
        <Tabs.Screen 
          name="index"
          options={{
            headerTitle: "BucketList", 
            tabBarIcon: ({focused, color}) => <Ionicons 
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          }}
        />
        <Tabs.Screen 
          name="list"
          options={{
            headerTitle: "BucketList", 
            tabBarIcon: ({focused, color})=> <Ionicons 
              name={focused ? "list-sharp" : "list-outline"}
              color={color}
              size={24}
            />
          }}
          />
    </Tabs>
  ) 
    
    
}
