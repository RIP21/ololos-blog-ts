package com.losmoney

import spock.lang.Specification

/**
 * Created by Jenson Harvey on 13.03.2016.
 */

class SpockTestSpec extends Specification {
    def "Test for spock"() {
        when:
            def lol = lols
        then:
            lol == results
        where:
            lols  | results
            true  | true
            false | false
    }
}
