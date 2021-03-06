/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.comb.framework.auth.aop.interceptor;

import org.springframework.aop.support.StaticMethodMatcherPointcutAdvisor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;


/**
 * Annotation功能通知点，引用spring的静态普通方法名匹配切面 
 * @author fwb
 *
 */
@SuppressWarnings({"unchecked"})
@Service
public class DbAttributeSourceAdvisor extends StaticMethodMatcherPointcutAdvisor implements InitializingBean {

	private static final long serialVersionUID = -8121708489008371849L;

    @Autowired
    private DbAnnotationMethodInterceptor dbAnnotationMethodInterceptor;

   private Set<Class<?>> set = new HashSet<>();

    /**
     * Returns <tt>true</tt> if the method has any Shiro annotations, false otherwise.
     * The annotations inspected are:
     *
     * @param method      the method to check for a Shiro annotation
     * @param targetClass the class potentially declaring Shiro annotations
     * @return <tt>true</tt> if the method has a Shiro annotation, false otherwise.
     * @see org.springframework.aop.MethodMatcher#matches(Method, Class)
     */
    public boolean matches(Method method, Class targetClass) {
//        if(!set.contains(targetClass)){
//            set.add(targetClass);
//            System.out.println("*********************************:" + targetClass);
//        }
        Method m = method;
        if (isAuthzAnnotationPresent(m)) {   
            return true;
        }

        //The 'method' parameter could be from an interface that doesn't have the annotation.
        //Check to see if the implementation has it.
        if ( targetClass != null) {
            try {            	
                m = targetClass.getMethod(m.getName(), m.getParameterTypes());
                if (isAuthzAnnotationPresent(m) ) {
                    return true;
                }
                if(isAuthzAnnotationPresent(targetClass)){
            		return true;
            	}
            } catch (NoSuchMethodException ignored) {
                //default return value is false.  If we can't find the method, then obviously
                //there is no annotation, so just use the default return value.
            }
        }
        return false;
    }

    private boolean isAuthzAnnotationPresent(Method method) {
        for( Class<? extends Annotation> annotationClass : dbAnnotationMethodInterceptor.getDbAnnotationClass() ) {
            Annotation a = AnnotationUtils.findAnnotation(method, annotationClass);
            if ( a != null ) {
                return true;
            }
        }
        return false;
    }
    
    private boolean isAuthzAnnotationPresent(Class clazz) {
        for( Class<? extends Annotation> annotationClass : dbAnnotationMethodInterceptor.getDbAnnotationClass() ) {
            Annotation a = AnnotationUtils.findAnnotation(clazz, annotationClass);
            if ( a != null ) {
                return true;
            }
        }
        return false;
    }

    public void afterPropertiesSet() throws Exception {
        Assert.notNull(dbAnnotationMethodInterceptor, "dbAnnotationMethodInterceptor must not be null!");
        setAdvice(dbAnnotationMethodInterceptor);
        this.setOrder(2);
    }

}
