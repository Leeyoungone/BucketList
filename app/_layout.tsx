import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
        <Stack.Screen 
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="+not-found"
          options={{
            title: "oops not found"
          }}
          />
    </Stack>
  ) 
    
    
}
