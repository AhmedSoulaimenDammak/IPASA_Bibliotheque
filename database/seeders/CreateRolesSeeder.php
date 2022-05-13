<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

/**
 * Class CreateRolesSeeder
 */
class CreateRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles[] = [
            'name'         => 'admin',
            'display_name' => 'Library Admin',
            'description'  => 'Library Admin',
            'is_default'   => true,
        ];
        $roles[] = [
            'name'         => 'librarian',
            'display_name' => 'Librarian',
            'description'  => 'Librarian',
            'is_default'   => true,
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
