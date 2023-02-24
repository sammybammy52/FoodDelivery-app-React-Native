import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ReactCurrencyFormatter from 'react-currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';

export default function DishRow({ id, name, description, price, image }) {

    const [isPressed, setIsPressed] = useState(false);
    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className="bg-white  p-4">
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className=" text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            <ReactCurrencyFormatter quantity={price} currency="NGN" />
                        </Text>
                    </View>

                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}

                            source={{
                                uri: urlFor(image).url()
                            }}
                            className="h-20 w-20 bg-gray-300 p-4 rounded-md"
                        />
                    </View>

                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity>
                            <MinusCircleIcon size={40} color="#00CCBB"/>
                        </TouchableOpacity>

                        <Text>0</Text>

                        <TouchableOpacity>
                            <PlusCircleIcon size={40} color="#00CCBB"/>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </>

    )
}