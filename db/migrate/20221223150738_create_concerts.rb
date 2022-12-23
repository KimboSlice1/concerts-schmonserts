class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.belongs_to :artist, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :city
      t.integer :date
      t.string :description

      t.timestamps
    end
  end
end
