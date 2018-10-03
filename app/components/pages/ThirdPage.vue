<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" col="0"/>
        <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
      </GridLayout>
    </ActionBar>

    <StackLayout>
      <Label text="Some Text at 3"></Label>
      <router-view></router-view>
    </StackLayout>
  </Page>
</template>