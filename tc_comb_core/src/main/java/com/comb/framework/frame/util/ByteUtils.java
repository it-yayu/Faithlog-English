package com.comb.framework.frame.util;

import java.io.*;

public class ByteUtils {

	public static Object convert(byte[] bytes) {
		ByteArrayInputStream byteIn = new ByteArrayInputStream(bytes);
		try {
			ObjectInputStream in = new ObjectInputStream(byteIn);
			return in.readObject();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static byte[] convert(Object object) {
		try {
			ByteArrayOutputStream byteOut = new ByteArrayOutputStream();
			ObjectOutputStream out = new ObjectOutputStream(byteOut);
			out.writeObject(object);
			return byteOut.toByteArray();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
