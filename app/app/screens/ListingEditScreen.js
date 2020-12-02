import React from 'react'
import { Image, SafeAreaView, StyleSheet} from 'react-native'

import * as Yup from 'yup'

import {AppFormField as FormField, SubmitButton, AppForm as Form, AppFormPicker as Picker} from "../components/forms"

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
  });
  
  const categories = [
    { label: "Fiction", value: 1 },
    { label: "Non-fiction", value: 2 },
  ];
  
  function ListingEditScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Form
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField maxLength={255} name="title" placeholder="Title" />
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
          />
          <Picker items={categories} name="category" placeholder="Category" />
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </Form>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });
  export default ListingEditScreen;