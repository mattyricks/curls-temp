import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function CategorySearch() {
    return (
        <div className='mb-10 items-center flex flex-col gap-2'>
            <h2 className='font-bold text-4xl tracking-wide'>Search &nbsp;
                <span className='text-primary'>
                    Options
                </span>
            </h2>

            <h2 className='text-gray-500 text-xl'>
                Search Stylist and Bookings
            </h2>

            <div className='flex w-full mt-3 max-w-sm items-center'>
                <Input type='text' placeholder='Search' />
                <Button type='submit'>
                    <Search className='h-4 w-f mr-2' />
                    Search..
                </Button>
            </div>
        </div>
    )
}

export default CategorySearch